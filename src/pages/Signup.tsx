import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const {
    values,
    errors,
    handleChange,
    validateEmail,
    validatePassword,
    validatePasswordMatch,
  } = useForm();

  const handleNext = () => {
    if (step === 1) {
      const isValid = validateEmail(values.email);
      if (isValid) {
        setStep(2);
      } else {
        alert("올바른 이메일 형식을 입력해주세요.");
      }
    } else if (step === 2) {
      const isPwValid = validatePassword(values.password);
      const isMatch = validatePasswordMatch(values.password, values.confirmPassword);
      if (isPwValid && isMatch) {
        setStep(3);
      } else {
        alert("비밀번호가 일치하지 않거나 유효하지 않습니다.");
      }
    }
  };

  const handleComplete = () => {
    if (values.nickname) {
      alert('회원가입 완료!');
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2>회원가입</h2>
        {step === 1 && <p>이메일을 입력해주세요.</p>}
        {step === 2 && <p>비밀번호를 설정해주세요.</p>}
        {step === 3 && <p>프로필을 설정해주세요.</p>}
      </div>

      {step === 1 && (
        <div className="signup-step">
          <button className="google-login">구글 로그인</button>
          <div className="or">OR</div>
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요!"
            value={values.email || ''}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <button onClick={handleNext} className="next-btn">다음</button>
        </div>
      )}

      {step === 2 && (
        <div className="signup-step">
          <p className="email-display">📧 {values.email}</p>
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요!"
            value={values.password || ''}
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호를 다시 입력해주세요!"
            value={values.confirmPassword || ''}
            onChange={handleChange}
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
          <button onClick={handleNext} className="next-btn">다음</button>
        </div>
      )}

      {step === 3 && (
        <div className="signup-step">
          <img src="/user-default.png" alt="기본 프로필" className="avatar" />
          <input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해주세요!"
            value={values.nickname || ''}
            onChange={handleChange}
            className={errors.nickname ? 'input-error' : ''}
          />
          {errors.nickname && <p className="error">{errors.nickname}</p>}
          <button onClick={handleComplete} className="complete-btn">회원가입 완료</button>
        </div>
      )}
    </div>
  );
}

export default Signup;
