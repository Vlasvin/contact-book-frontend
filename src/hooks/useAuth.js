import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/Auth/selectors";

export const useAuth = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isRefreshing,
  };
};
