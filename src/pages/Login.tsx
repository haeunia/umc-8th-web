import styles from './Login.module.css';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(validateEmail(value) ? '' : '올바른 이메일 형식을 입력해주세요.');
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(value.length >= 8 ? '' : '비밀번호는 8자 이상이어야 합니다.');
  };

  const isValid = email && password && !emailError && !passwordError;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>로그인</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="이메일을 입력해주세요!"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        {emailError && <div className={styles.error}>{emailError}</div>}
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        {passwordError && <div className={styles.error}>{passwordError}</div>}
        <button className={styles.button} disabled={!isValid}>
          로그인
        </button>
      </div>
    </div>
  );
}
