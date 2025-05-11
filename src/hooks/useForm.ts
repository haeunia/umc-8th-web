import { useState } from 'react';

export function useForm() {
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setErrors((prev) => ({
      ...prev,
      email: isValid ? '' : '올바른 이메일 형식을 입력해주세요!',
    }));
    return isValid;
  };

  const validatePassword = (password: string) => {
    const isValid = password.length >= 8;
    setErrors((prev) => ({
      ...prev,
      password: isValid ? '' : '비밀번호는 최소 8자 이상이어야 합니다!',
    }));
    return isValid;
  };

  const validatePasswordMatch = (pw: string, cpw: string) => {
    const isMatch = pw === cpw;
    setErrors((prev) => ({
      ...prev,
      confirmPassword: isMatch ? '' : '비밀번호가 일치하지 않습니다!',
    }));
    return isMatch;
  };

  return {
    values,
    errors,
    handleChange,
    validateEmail,
    validatePassword,
    validatePasswordMatch,
  };
}
