"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputOTPForm from "./InputOTPForm";

const NoticeWriteButton = () => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-xl bg-[#78b237] px-6 py-2 text-sm text-white hover:bg-[#78b237]/90">
        글쓰기
      </DialogTrigger>
      <DialogContent className="sm:max-w-[25rem] max-w-xs mx-auto rounded-xl flex flex-col items-start">
        <DialogHeader>
          <DialogTitle>Enter Passkey</DialogTitle>
          <DialogDescription>패스키를 입력해주세요.</DialogDescription>
        </DialogHeader>
        <InputOTPForm />
      </DialogContent>
    </Dialog>
  );
};

export default NoticeWriteButton;
