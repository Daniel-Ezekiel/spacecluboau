"use client";
import React from "react";

type CardProps = {
  cardTitle: string;
  cardText: string;
  className?: string;
};

export default function InfoCard({
  cardTitle,
  cardText,
  className,
}: CardProps) {
  return (
    <div
      className={`border-y border-l-2 border-primary-gold-light p-6 py-[4rem] flex flex-col justify-start bg-white shadow-xl sm:border sm:border-primary-gold-dark lg:border-0 lg:border-l-2 ${className}`}
    >
      <h3 className='mb-2 font-medium text-xl'>{cardTitle}</h3>
      <p className='text-base'>{cardText}</p>
    </div>
  );
}
