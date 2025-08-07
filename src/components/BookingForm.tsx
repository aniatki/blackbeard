'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/firebase.config';

const TEAM_MEMBERS = [
  { title: "Geovani", src: "https://cdn1.treatwell.net/images/view/v2.i5383445.w256.h256.xDF30C6D2/" },
  { title: "Nerea", src: "https://cdn1.treatwell.net/images/view/v2.i10166150.w256.h256.x884E412B/" },
  { title: "Rarysson", src: "https://cdn1.treatwell.net/images/view/v2.i11355510.w256.h256.x4A75852C/" },
  { title: "Léo", src: "https://cdn1.treatwell.net/images/view/v2.i8005406.w256.h256.x2968814C/" },
  { title: "Anibal", src: "https://cdn1.treatwell.net/images/view/v2.i12645174.w256.h256.xE2283EFD/" },
  { title: "Jose", src: "https://cdn1.treatwell.net/images/view/v2.i14080188.w256.h256.xDDF729ED/" },
  { title: "Javier", src: "https://cdn1.treatwell.net/images/view/v2.i14080191.w256.h256.x59ED15D5/" },
];

const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

export default function BookingFormDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    date: new Date(),
    time: '',
    teamMember: '',
  });

  const validateForm = () => {
    if (!formData.firstName || !formData.email || !formData.date || !formData.time || !formData.teamMember) {
      setErrorMessage('Please fill out all fields.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleTeamMemberChange = (value) => {
    setFormData((prev) => ({ ...prev, teamMember: value }));
  };

  const handleTimeChange = (value) => {
    setFormData((prev) => ({ ...prev, time: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        date: formData.date.toString(),
        createdAt: new Date().toISOString(),
        status: 'pending',
      });

      setSuccessMessage('Booking confirmed successfully!');
      setOpen(false);
      setFormData({
        firstName: '',
        email: '',
        date: new Date(),
        time: '',
        teamMember: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      setErrorMessage('Failed to make a booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-bold text-md cursor-pointer px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">Book Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>
            Choose a date, time, and team member to book your service.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {successMessage && (
            <div className="text-green-600 font-semibold text-center">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">{errorMessage}</div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">First Name</Label>
            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Date</Label>
            <div className="col-span-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !formData.date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={formData.date} onSelect={handleDateChange} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Time</Label>
            <div className="col-span-3">
              <Select onValueChange={handleTimeChange} value={formData.time}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimes.map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="">Team Member</Label>
            <div className="col-span-3">
              <Select onValueChange={handleTeamMemberChange} value={formData.teamMember}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a team member" />
                </SelectTrigger>
                <SelectContent>
                  {TEAM_MEMBERS.map((member, i) => (
                    <SelectItem key={i} value={member.title}>{member.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}