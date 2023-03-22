import React from 'react';

type ErrorProps = {
  text: string;
};

const FormError = ({ text }: ErrorProps) => (
  <section className="text-left py-2">
    <p className="text-xs text-red-500">{text}</p>
  </section>
);

export default FormError;
