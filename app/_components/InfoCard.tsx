import React from "react";

type CardProps = {
  cardTitle: string;
  cardText: string;
  cardIndex: number;
  cardSpan: number;
};

export default function InfoCard({
  cardTitle,
  cardText,
  cardSpan,
  cardIndex,
}: CardProps) {
  console.log(cardTitle, cardSpan);
  return (
    <div
      className={`border-y border-l-2 border-primary-gold-light p-6 py-[4rem] flex flex-col justify-center bg-white shadow-xl sm:border-x ${
        cardSpan === 2 && "xl:col-span-2"
      }}`}
    >
      <h3 className='mb-2 font-medium text-xl'>{cardTitle}</h3>
      <p>{cardText}</p>
    </div>
  );
}
