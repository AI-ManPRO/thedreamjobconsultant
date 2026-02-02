import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (container: string) => void;
      };
    };
  }
}

interface PayPalHostedButtonProps {
  hostedButtonId: string;
}

const PayPalHostedButton: React.FC<PayPalHostedButtonProps> = ({ hostedButtonId }) => {
  const containerId = `paypal-container-${hostedButtonId}`;
  const [isSdkReady, setSdkReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const buttonRendered = useRef(false);

  useEffect(() => {
    // 1. Script Loading Logic
    const loadScript = async () => {
      if (window.paypal && window.paypal.HostedButtons) {
        setSdkReady(true);
        return;
      }

      if (document.getElementById('paypal-sdk')) {
        // Script exists but maybe not fully ready, wait for it
        const checkInterval = setInterval(() => {
          if (window.paypal && window.paypal.HostedButtons) {
            clearInterval(checkInterval);
            setSdkReady(true);
          }
        }, 100);
        return;
      }

      const script = document.createElement('script');
      script.id = 'paypal-sdk';
      script.src = "https://www.paypal.com/sdk/js?client-id=BAAUbt1kD5mCmsei5AEu3CMKtmNttl8GNEj5oz5k8TSOSZPp4H-Y4XM0Tk6hnv-OFLSjTq_TQvvfZN6iVc&components=hosted-buttons&disable-funding=venmo&currency=USD";
      script.crossOrigin = "anonymous";
      script.async = true;

      script.onload = () => {
        setSdkReady(true);
      };

      script.onerror = () => {
        setError("Failed to load PayPal SDK.");
      };

      document.head.appendChild(script);
    };

    loadScript();
  }, []);

  useEffect(() => {
    // 2. Button Rendering Logic
    if (isSdkReady && !buttonRendered.current && !error) {
      if (window.paypal && window.paypal.HostedButtons) {
        try {
          // Clear container just in case
          const container = document.getElementById(containerId);
          if (container) container.innerHTML = '';

          window.paypal.HostedButtons({
            hostedButtonId: hostedButtonId
          }).render(`#${containerId}`);
          buttonRendered.current = true;
        } catch (err) {
          console.error("PayPal Render Error:", err);
          setError("Failed to render payment button.");
        }
      }
    }
  }, [isSdkReady, hostedButtonId, containerId, error]);

  return (
    <div className="w-full relative z-0 mt-4">
      <div id={containerId} className="w-full"></div>
      {!isSdkReady && !error && (
        <div className="text-slate-400 text-sm text-center py-4">Loading payment options...</div>
      )}
      {error && (
        <div className="text-red-400 text-sm p-2 text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default PayPalHostedButton;
