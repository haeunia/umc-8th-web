import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // 스타일 분리하고 싶으면 이 파일 만들고 적용

function Navbar() {
  const location = useLocation();

  return (
    <nav style={{
      width: '100%',
      height: '60px',
      backgroundColor: '#111',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      color: '#f50057',
    }}>
      <div style={{ fontWeight: 'bold' }}>돌려돌려LP판</div>
      <div>
        <Link to="/login">
          <button
            style={{
              marginRight: '10px',
              backgroundColor: location.pathname === '/login' ? '#555' : '#000',
              color: 'white',
              border: '1px solid white',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button
            style={{
              backgroundColor: '#f50057',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            회원가입
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
