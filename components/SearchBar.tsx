"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface Props {
  /** Initial value — controlled by the parent (e.g. the search page). */
  initialValue?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Auto-focus on mount (useful on the dedicated search page) */
  autoFocus?: boolean;
}

export default function SearchBar({
  initialValue = "",
  placeholder = "Search articles across all verticals…",
  autoFocus = false,
}: Props) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep in sync if the parent changes the initial value (e.g. back navigation)
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function handleClear() {
    setValue("");
    inputRef.current?.focus();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="search-bar-form"
      role="search"
      aria-label="Search articles"
    >
      <div className="search-bar-inner">
        <Icon
          icon="mdi:magnify"
          width={18}
          className="search-bar-icon"
          aria-hidden
        />
        <input
          ref={inputRef}
          type="search"
          id="site-search"
          name="q"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="search-bar-input"
          aria-label="Search query"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="search-bar-clear"
            aria-label="Clear search"
          >
            <Icon icon="mdi:close" width={16} />
          </button>
        )}
        <button type="submit" className="search-bar-btn" aria-label="Submit search">
          Search
        </button>
      </div>

      <style>{`
        .search-bar-form {
          width: 100%;
        }
        .search-bar-inner {
          display: flex;
          align-items: center;
          background: var(--color-white);
          border: 2px solid var(--color-border);
          border-radius: 6px;
          overflow: hidden;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .search-bar-inner:focus-within {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(26,86,219,0.12);
        }
        .search-bar-icon {
          flex-shrink: 0;
          margin: 0 12px;
          color: var(--color-gray-500);
        }
        .search-bar-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-text);
          padding: 13px 0;
          min-width: 0;
        }
        .search-bar-input::placeholder {
          color: var(--color-gray-500);
        }
        /* Hide the browser's built-in clear button */
        .search-bar-input::-webkit-search-cancel-button { display: none; }
        .search-bar-clear {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin-right: 4px;
          border: none;
          background: var(--color-gray-200);
          border-radius: 50%;
          cursor: pointer;
          color: var(--color-gray-600);
          flex-shrink: 0;
          transition: background 150ms ease, color 150ms ease;
        }
        .search-bar-clear:hover {
          background: var(--color-gray-300);
          color: var(--color-gray-900);
        }
        .search-bar-btn {
          flex-shrink: 0;
          background: var(--color-primary);
          color: #fff;
          border: none;
          padding: 0 20px;
          height: 100%;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: background 150ms ease;
          white-space: nowrap;
          align-self: stretch;
        }
        .search-bar-btn:hover {
          background: var(--color-primary-dark);
        }
      `}</style>
    </form>
  );
}
