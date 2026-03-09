"use client";

import React, { forwardRef, useId } from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const hasError = Boolean(error);

    const inputClasses = [
      styles.input,
      leftIcon ? styles.hasLeftIcon : "",
      rightIcon ? styles.hasRightIcon : "",
      hasError ? styles.hasError : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ""}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputWrapper}>
          {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            {...props}
          />
          {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </div>
        {(error || hint) && (
          <span className={`${styles.message} ${hasError ? styles.errorText : styles.hintText}`}>
            {error || hint}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

// Textarea Component
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, fullWidth = false, className = "", id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const hasError = Boolean(error);

    const textareaClasses = [
      styles.input,
      styles.textarea,
      hasError ? styles.hasError : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ""}`}>
        {label && (
          <label htmlFor={textareaId} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          {...props}
        />
        {(error || hint) && (
          <span className={`${styles.message} ${hasError ? styles.errorText : styles.hintText}`}>
            {error || hint}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

// Select Component
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, fullWidth = false, className = "", id, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const hasError = Boolean(error);

    const selectClasses = [
      styles.input,
      styles.select,
      hasError ? styles.hasError : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ""}`}>
        {label && (
          <label htmlFor={selectId} className={styles.label}>
            {label}
          </label>
        )}
        <select ref={ref} id={selectId} className={selectClasses} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className={`${styles.message} ${styles.errorText}`}>{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";
