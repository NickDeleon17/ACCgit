// export const [number, setNumber] = useState(null);

export const getRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  setNumber(randomNum);
};