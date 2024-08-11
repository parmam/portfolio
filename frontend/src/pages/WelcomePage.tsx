import { FunctionComponent, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const WelcomePage: FunctionComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleDOMLoaded = () => {
      navigate('/home')
    };

    if (document.readyState === 'complete') {
      handleDOMLoaded();
    } else {
      window.addEventListener('load', handleDOMLoaded);
    }

    return () => {
      window.removeEventListener('load', handleDOMLoaded);
    };
  }, [])
  return <div>
    loading...
  </div>
}


export default WelcomePage


