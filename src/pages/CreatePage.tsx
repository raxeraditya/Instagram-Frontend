import { useNavigate, useLocation } from "react-router-dom";
import { CreatePostModal } from "../components/create/CreatePostModal";

export function CreatePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.from || "/";

  const handleClose = () => {
    navigate(previousPath);
  };

  return <CreatePostModal isOpen={true} onClose={handleClose} />;
}
