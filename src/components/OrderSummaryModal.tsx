"use client";

import { useEffect, useRef, useState } from "react";
import { X, Lock, Shield, Minus, Plus } from "lucide-react";
import Link from "next/link";
import {
  buildWhatsAppCheckoutUrl,
  MAX_EXTRA_CONNECTIONS,
  PROXY_PROTECTION_PRICE,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

type OrderSummaryModalProps = {
  open: boolean;
  onClose: () => void;
  onCheckout?: () => void;
  planName: string;
  planPrice: number;
  /** Per-plan price — differs by commitment length. */
  extraConnectionPrice: number;
  currency?: string;
};

const formatPrice = (value: number, currency: string) =>
  `${currency}${value.toFixed(2)}`;

export default function OrderSummaryModal({
  open,
  onClose,
  onCheckout,
  planName,
  planPrice,
  extraConnectionPrice,
  currency = "£",
}: OrderSummaryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [proxyProtection, setProxyProtection] = useState(false);
  const [extraConnections, setExtraConnections] = useState(0);

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

  const total =
    planPrice +
    (proxyProtection ? PROXY_PROTECTION_PRICE : 0) +
    extraConnectionPrice * extraConnections;

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

            <div className="space-y-3">
              <AddOnToggleRow
                id="proxy-protection"
                label="Proxy Protection"
                badge="POPULAR"
                price={formatPrice(PROXY_PROTECTION_PRICE, currency)}
                description="An integrated proxy designed to prevent ISP tracking of service usage."
                checked={proxyProtection}
                onChange={setProxyProtection}
              />

              <AddOnCounterRow
                id="extra-connection"
                label="Extra Connection"
                unitPrice={formatPrice(extraConnectionPrice, currency)}
                lineTotal={formatPrice(
                  extraConnectionPrice * extraConnections,
                  currency
                )}
                description="Each one adds a simultaneous stream on the same account for the full plan term."
                value={extraConnections}
                max={MAX_EXTRA_CONNECTIONS}
                onChange={setExtraConnections}
              />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="space-y-4 border-t border-gray-100 bg-gray-50/70 px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-muted">Total</span>
            <span className="text-xl font-extrabold text-foreground">
              {formatPrice(total, currency)}
            </span>
          </div>

          <a
            href={buildWhatsAppCheckoutUrl({
              planName,
              planPrice,
              proxyProtection,
              extraConnections,
              extraConnectionPrice,
            })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCheckout}
            aria-label="Proceed to secure checkout"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:shadow-lg hover:shadow-purple-500/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <Lock className="h-4 w-4" aria-hidden="true" />
            SECURE CHECKOUT
          </a>

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

/** Shared shell so the toggle and counter add-ons stay visually identical. */
function AddOnShell({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-5 py-4 transition-colors",
        active ? "border-violet-300 bg-violet-50/40" : "border-gray-100 bg-white"
      )}
    >
      {children}
    </div>
  );
}

function AddOnHeading({ id, label, badge }: { id: string; label: string; badge?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span id={id} className="text-sm font-semibold text-foreground">
        {label}
      </span>
      {badge && (
        <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] text-amber-700">
          {badge}
        </span>
      )}
    </div>
  );
}

type AddOnToggleRowProps = {
  id: string;
  label: string;
  badge?: string;
  price: string;
  description: string;
  checked: boolean;
  onChange: (next: boolean) => void;
};

function AddOnToggleRow({
  id,
  label,
  badge,
  price,
  description,
  checked,
  onChange,
}: AddOnToggleRowProps) {
  const labelId = `${id}-label`;

  return (
    <AddOnShell active={checked}>
      <div className="mb-1 flex items-start justify-between gap-3">
        <AddOnHeading id={labelId} label={label} badge={badge} />

        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={labelId}
          onClick={() => onChange(!checked)}
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
            checked ? "bg-violet-600" : "bg-gray-200"
          )}
        >
          <span
            className={cn(
              "inline-block h-5 w-5 rounded-full bg-white shadow transition-transform",
              checked ? "translate-x-5.5" : "translate-x-0.5"
            )}
          />
        </button>
      </div>

      <div className="mb-2 text-sm font-bold text-accent">{price}</div>

      <p className="text-xs leading-relaxed text-muted">{description}</p>
    </AddOnShell>
  );
}

type AddOnCounterRowProps = {
  id: string;
  label: string;
  unitPrice: string;
  lineTotal: string;
  description: string;
  value: number;
  max: number;
  onChange: (next: number) => void;
};

function AddOnCounterRow({
  id,
  label,
  unitPrice,
  lineTotal,
  description,
  value,
  max,
  onChange,
}: AddOnCounterRowProps) {
  const labelId = `${id}-label`;
  const clamp = (next: number) => onChange(Math.min(max, Math.max(0, next)));

  const stepperButton =
    "flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-foreground transition-colors hover:border-violet-300 hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-foreground";

  return (
    <AddOnShell active={value > 0}>
      <div className="mb-1 flex items-start justify-between gap-3">
        <AddOnHeading id={labelId} label={label} />

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => clamp(value - 1)}
            disabled={value === 0}
            aria-label={`Remove one ${label}`}
            className={stepperButton}
          >
            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <output
            aria-live="polite"
            aria-labelledby={labelId}
            className="w-6 text-center text-sm font-bold tabular-nums text-foreground"
          >
            {value}
          </output>

          <button
            type="button"
            onClick={() => clamp(value + 1)}
            disabled={value === max}
            aria-label={`Add one ${label}`}
            className={stepperButton}
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mb-2 flex items-baseline gap-2">
        <span className="text-sm font-bold text-accent">{unitPrice} each</span>
        {value > 0 && (
          <span className="text-xs font-semibold text-muted">= {lineTotal}</span>
        )}
      </div>

      <p className="text-xs leading-relaxed text-muted">
        {description} Up to {max}.
      </p>
    </AddOnShell>
  );
}
