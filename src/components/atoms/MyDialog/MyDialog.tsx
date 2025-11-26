import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaSearch } from "react-icons/fa";
export default function MyDialog({
  trigger,
  title,
  children,
}: {
  trigger;
  title;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <div className="w-full flex justify-center h-0">
          <div className="text-white bg-blue-500  drop-shadow-2xl translate-y-[-5rem] size-[5rem] absolute grid place-items-center rounded-full text-[3rem]">
            <FaSearch />
          </div>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
