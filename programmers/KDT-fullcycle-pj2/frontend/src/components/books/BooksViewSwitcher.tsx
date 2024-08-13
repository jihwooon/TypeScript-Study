import styled from 'styled-components';
import Button from '../common/Button';
import { FaList, FaTh } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';
import { useEffect } from 'react';

const viewOptions = [
  {
    value: 'list',
    icon: <FaList />,
  },
  {
    value: 'grid',
    icon: <FaTh />,
  },
];

export type ViewMode = 'grid' | 'list';

const BooksSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch('grid');
    }
  }, []);

  return (
    <BooksSwitcherStyle>
      {viewOptions.map(({ value, icon }) => (
        <Button
          key={value}
          size="medium"
          scheme={searchParams.get(QUERYSTRING.VIEW) === value ? 'primary' : 'normal'}
          onClick={() => handleSwitch(value as ViewMode)}
        >
          {icon}
        </Button>
      ))}
    </BooksSwitcherStyle>
  );
};

const BooksSwitcherStyle = styled.div`
  display: flex;
  gap: 8px;
  svg {
    fill: #fff;
  }
`;

export default BooksSwitcher;
