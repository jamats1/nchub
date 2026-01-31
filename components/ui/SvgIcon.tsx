"use client";

import type React from "react";
import { useEffect, useState } from "react";

type IconProps = {
  src?: string;
  alt?: string;
  fallbackSrc?: string;
  icon?: React.ReactNode;
  className?: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  onError?: () => void;
};

export function SvgIcon({
  src,
  alt,
  fallbackSrc,
  icon,
  className = "",
  width,
  height,
  title,
  onError,
}: IconProps) {
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (src && !hasLoaded && !hasError) {
      const timeout = setTimeout(() => {
        if (!hasLoaded && !hasError) setHasLoaded(true);
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [src, hasLoaded, hasError]);

  if (!src && !icon) return null;

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleLoad = () => setHasLoaded(true);

  if (src) {
    if (!src.startsWith("/")) return null;

    if (hasError && fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          alt={alt || ""}
          className={`${className} fallback-icon`}
          width={width}
          height={height}
          title={title}
          loading="lazy"
        />
      );
    }

    if (hasError && !fallbackSrc) {
      return (
        <span
          className={`${className} text-icon`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width:
              width !== undefined
                ? typeof width === "number"
                  ? `${width}px`
                  : width
                : undefined,
            height:
              height !== undefined
                ? typeof height === "number"
                  ? `${height}px`
                  : height
                : undefined,
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "#f3f4f6",
            color: "#6b7280",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
          }}
          title={title || alt}
        >
          {alt ? alt.substring(0, 3).toUpperCase() : "?"}
        </span>
      );
    }

    return (
      <img
        src={src}
        alt={alt || ""}
        className={`${className} transition-opacity`}
        width={width}
        height={height}
        title={title}
        loading="lazy"
        onError={handleError}
        onLoad={handleLoad}
        style={{ display: "inline-block" }}
      />
    );
  }

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        width:
          width !== undefined
            ? typeof width === "number"
              ? `${width}px`
              : width
            : undefined,
        height:
          height !== undefined
            ? typeof height === "number"
              ? `${height}px`
              : height
            : undefined,
      }}
      title={title}
      role={title ? "img" : undefined}
      aria-label={title}
    >
      {icon}
    </span>
  );
}
