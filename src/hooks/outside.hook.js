import {useEffect} from "react";
import {useDispatch} from "react-redux";

export function useOutside(ref, cb) {
  const dispatch = useDispatch()
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, dispatch, cb]);
}