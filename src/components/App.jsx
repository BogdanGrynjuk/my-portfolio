import Button from './UI/Button/Button';

export const App = () => {
  const handleClick = () => {
    alert('click');
  };
  return (
    <>
      <h1> Portfolio by Bogdan Grynjuk</h1>
      <Button onClick={handleClick} type="button">
        Custom Button
      </Button>
    </>
  );
};
