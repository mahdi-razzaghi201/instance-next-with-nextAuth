"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/atoms/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/atoms/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface DrawerDialogProps {
  trigger: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DrawerDialog({
  trigger,
  title,
  content,
  open,
  onOpenChange,
}: DrawerDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const isControlled = typeof open !== "undefined";
  const derivedOpen = isControlled ? open : internalOpen;
  const handleOpenChange = isControlled ? onOpenChange : setInternalOpen;

  const DialogComponent = isMobile ? Drawer : Dialog;
  const ContentComponent = isMobile ? DrawerContent : DialogContent;
  const TriggerComponent = isMobile ? DrawerTrigger : DialogTrigger;

  return (
    <DialogComponent open={derivedOpen} onOpenChange={handleOpenChange}>
      <TriggerComponent asChild>{trigger}</TriggerComponent>
      
      <ContentComponent>
        {title}
        {content}
      </ContentComponent>
    </DialogComponent>
  );
}