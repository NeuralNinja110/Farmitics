import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Social } from '../pages/Social';
import { Trade } from '../pages/Trade';
import { Insight } from '../pages/Insight';
import { Devices } from '../pages/Devices';
import { Control } from '../pages/Control';
import { Learn } from '../pages/Learn';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/social" element={<Social />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/insight" element={<Insight />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/control" element={<Control />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}