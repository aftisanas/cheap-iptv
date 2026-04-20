"use client";

import { useEffect, useRef } from "react";
import { X, Lock, Shield } from "lucide-react";
import Link from "next/link";

type OrderSummaryModalProps = {
  open: boolean;
  onClose: () => void;
  onCheckout?: () => void;
  planName: string;
  planPrice: number;
  currency?: string;
};

const formatPrice = (value: number, currency: string) =>
  `${value.toFixed(2)} ${currency}`;

export default function OrderSummaryModal({
  open,
  onClose,
  onCheckout,
  planName,
  planPrice,
  currency = "€",
}: OrderSummaryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-summary-title"
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-violet-100/60 bg-white shadow-2xl shadow-purple-900/20"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <h2
            id="order-summary-title"
            className="text-xs font-bold tracking-[0.18em] text-foreground"
          >
            ORDER SUMMARY
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close order summary"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-muted transition-colors hover:bg-gray-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-5 px-6 pt-5 pb-6">
          {/* Plan row */}
          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4">
            <span className="text-base font-semibold text-foreground">
              {planName}
            </span>
            <div className="text-right">
              <div className="text-xl font-extrabold text-foreground">
                {formatPrice(planPrice, currency)}
              </div>
              <div className="mt-0.5 text-[10px] font-semibold tracking-[0.15em] text-muted">
                ONE-TIME PAYMENT
              </div>
            </div>
          </div>

          {/* Recommended options */}
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-[0.18em] text-muted">
              RECOMMENDED OPTIONS
            </h3>

            <div className="rounded-xl border border-gray-100 bg-white px-5 py-4">
              <div className="mb-1 flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    Proxy Protection
                  </span>
                  <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] text-amber-700">
                    POPULAR
                  </span>
                </div>

                {/* Static toggle (off) — decorative */}
                <span
                  aria-hidden="true"
                  className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-gray-200"
                >
                  <span className="inline-block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow" />
                </span>
              </div>

              <div className="mb-2 text-sm font-bold text-accent">
                {formatPrice(15, currency)}
              </div>

              <p className="text-xs leading-relaxed text-muted">
                An integrated proxy designed to prevent ISP tracking of service usage.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="space-y-4 border-t border-gray-100 bg-gray-50/70 px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-muted">Total</span>
            <span className="text-xl font-extrabold text-foreground">
              {formatPrice(planPrice, currency)}
            </span>
          </div>

          <button
            type="button"
            onClick={onCheckout}
            aria-label="Proceed to secure checkout"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:shadow-lg hover:shadow-purple-500/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <Lock className="h-4 w-4" aria-hidden="true" />
            SECURE CHECKOUT
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-muted">
            <Shield className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              100% Secure &amp; Encrypted Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
