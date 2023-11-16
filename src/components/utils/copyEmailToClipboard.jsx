import { useState } from 'react';
import email from "../../assets/icons/email.svg";

    
const CopyEmailLinkWithTooltip = () => {
    const email = "../../assets/icons/email.svg";
  
    const [isTooltipVisible, setTooltipVisible] = useState(false);
  
    const handleCopyEmail = () => {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    };
  
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={handleCopyEmail}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          {email}
        </button>
        {isTooltipVisible && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#fff',
              border: '1px solid #ccc',
              padding: '5px',
              borderRadius: '4px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              zIndex: '1',
            }}
          >
            Адрес скопирован!
          </div>
        )}
      </div>
    );
  };
  
  export default CopyEmailLinkWithTooltip;