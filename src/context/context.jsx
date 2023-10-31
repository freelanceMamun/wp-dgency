import { createContext, useState, useEffect, useRef } from 'react';

export const StateContext = ({ children }) => {
  // // ===== Show Services initial State =
  const [show, setShow] = useState(6);
  // // =======  fade animation custom state
  const [isVisible, setVisible] = useState(true);
  const [isVisibleOne, setVisibleOne] = useState(true);

  // // ============  Services Other Show Function ==========
  const setShowFun = () => {
    setShow((prev) => {
      return prev + 6;
    });
  };

  // // =======  fade animation custom function

  const domRef = useRef();
  const domRefOne = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const observerOne = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisibleOne(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    observerOne.observe(domRefOne.current);

    return () => {
      observer.unobserve(domRef.current);
      observerOne.unobserve(domRefOne.current);
    };
  }, []);

  return (
    <MainContent.Provider
      value={{ domRef, domRefOne, isVisible, show, setShowFun, isVisibleOne }}
    >
      {children}
    </MainContent.Provider>
  );
};

export const MainContent = createContext();
