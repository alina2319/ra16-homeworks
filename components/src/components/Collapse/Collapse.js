import { useRef, useState, useEffect } from 'react';
import './collapse.css';
import PropTypes from 'prop-types';

function Collapse({ isExpanded, collapsedLabel, expandedLabel, children }) {
  const [isOpen, setIsOpen] = useState(isExpanded); // Определяет открыт или скрыт текст.
  const [height, setHeight] = useState('auto'); // Устанавливает высоту для блока с текстом.
  const [expandedHeight, setExpandedHeight] = useState('auto'); // Значение высоты при открытом тексте.
  const [isHeightInit, setIsHeightInit] = useState(false); // Опрпеделяет, была ли установленна высота блока при открытом тексте.
  const refCollapseText = useRef(null);

  const onClick = () => {
    if (isOpen) {
      setHeight(0);
    } else {
      setHeight(expandedHeight);
    }
    setIsOpen(!isOpen);
  }

  // Определение высоты блока с текстом, так как нельзя анимировать от значения 'auto'.
  const initExpandedHeight = () => {
    if (isHeightInit) return;
    setExpandedHeight(`${refCollapseText.current.offsetHeight}px`);
    setIsHeightInit(true);
  }

  useEffect(() => {
    initExpandedHeight();

    if (!isOpen) {
      setHeight(0);
      return;
    }
  
    setHeight(expandedHeight);
  }, [expandedHeight]);

  return (
    <div className={`collapse ${isOpen ? 'collapse_expanded': 'collapse_collapsed'}`}>
      <div 
        className={'collapse__text-animation'} 
        ref={refCollapseText}
        style={{height}}>
          <div className={'collapse__text'}>
            {children}
          </div>
      </div>

      <div className={'collapse__footer'}>
        <button className={'collapse__btn'} onClick={onClick}>{isOpen ? expandedLabel: collapsedLabel}</button>
      </div>
    </div>
  )
}

Collapse.defaultProps = {
  collapsedLabel: 'Подробнее',
  expandedLabel: 'Скрыть',
  isExpanded: true,
}

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  isExpanded: PropTypes.bool,
}

export default Collapse;
