import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getRandomGreeting} from '../greeting';
const  HelloWorld = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greeting);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, []);

  return (
    <div>
      <h1>{greeting.message}</h1>
    </div>
  );
};

export default HelloWorld
