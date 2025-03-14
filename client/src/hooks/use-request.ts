import { ErrorsData } from '@/interfaces/errors';
import axios from 'axios';
import { useState } from 'react';

interface UseRequestProps {
  url: string;
  method: string;
  body: {};
}

export default function useRequest({ url, method, body }: UseRequestProps) {
  const [errors, setErrors] = useState<ErrorsData[]>([]);

  const doRequest = async () => {
    try {
      const response = await axios.request({ url, method, data: body });

      return response.data;
    } catch (err: any) {
      setErrors(err.response.data.errors);

      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
  };

  return { doRequest, errors };
}
