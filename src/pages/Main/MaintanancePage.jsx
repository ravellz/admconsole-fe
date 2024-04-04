import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import Maintanance from "../../components/Main/Maintanance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import '../../styles/Fully.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <Maintanance/>
    </Layout>
  );
};

export default Dashboard;