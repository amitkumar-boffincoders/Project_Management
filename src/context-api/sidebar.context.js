import { createContext, useContext, useState } from "react";

export const SidebarContext = createContext({
  isVisible: false,
  setIsVisible: () => { },
});

const SidebarContextAPI = (props) => {
  const [isVisible, setState] = useState(false);
  return (
    <SidebarContext.Provider
      value={{
        isVisible, setIsVisible: () => {
          setState((prevValue) => {
            return !prevValue
          })
        },
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};
export default SidebarContextAPI;

export const useSidebarContext = () => useContext(SidebarContext);
