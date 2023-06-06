import { useEffect, useState } from 'react';

interface CurrencyFormatterProps {
    amount: any;
  }

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ( {amount = 0} ) => {
    const [formattedAmount, setAmount] = useState(amount);
    useEffect(() => {
        const formattedAmount = amount.toLocaleString('vi-VN', {
          style: 'decimal',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
    setAmount(formattedAmount)
  }, []);

  return <>{formattedAmount}</>;
};

export default CurrencyFormatter;
