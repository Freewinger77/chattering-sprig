"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function PhoneNumberForm() {


  

  return (
    <div className="flex items-center space-x-2">
      <Select >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="+1">🇺🇸 (+1)</SelectItem>
          <SelectItem value="+44">🇬🇧 (+44)</SelectItem>
          <SelectItem value="+60">🇲🇾 (+60)</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="tel"
        placeholder="Enter your number"
        value={phoneNumber}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          if (value.length <= 10) {
            setPhoneNumber(value);
          }
        }}
        className="flex-1"
      />
      <Button onClick={handleCall}>Call me now</Button>
    </div>
  );
}
