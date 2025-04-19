"use client";

import { useExitModal } from "@/store/use-exit-modal";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const ExitModal = () => {
  //const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent></DialogContent>
    </Dialog>
  );
};
