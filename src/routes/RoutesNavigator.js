import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddMemberScreen from "../screens/AddMemberScreen";
import LoginScreen from "../screens/LoginScreen";

export default function RoutesNavigator() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/addMember" element={<AddMemberScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}