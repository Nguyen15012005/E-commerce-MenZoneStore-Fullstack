import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Stack,
  InputAdornment,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Email, VpnKey, Storefront } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import api from "../../../config/api";

const SellerAuth = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      setError("Vui lòng nhập email của bạn");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await api.post("/auth/sent/login-signup-otp", {
        email: email,
        role: "SELLER",
      });
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Không thể gửi OTP. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!otp) {
      setError("Vui lòng nhập mã OTP");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await api.post("/sellers/login", {
        email: email,
        otp: otp,
      });
      
      const { jwt } = response.data;
      localStorage.setItem("seller_jwt", jwt);
      
      // Redirect to dashboard
      navigate("/seller");
    } catch (err) {
      setError(err.response?.data?.message || "Mã OTP không chính xác hoặc đã hết hạn.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F4F7FE",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 450,
          p: 5,
          borderRadius: "32px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          border: "1px solid #EAEAEA",
        }}
      >
        <Stack spacing={4} alignItems="center">
          <Box
            sx={{
              width: 64,
              height: 64,
              bgcolor: "#111",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A96E",
              mb: 1,
            }}
          >
            <Storefront sx={{ fontSize: 32 }} />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: "#111" }}>
              Seller <span style={{ color: "#C9A96E" }}>Center</span>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Chào mừng bạn quay trở lại. Vui lòng đăng nhập để tiếp tục.
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ width: "100%", borderRadius: "12px" }}>
              {error}
            </Alert>
          )}

          <Stack spacing={3} sx={{ width: "100%" }}>
            {step === 1 ? (
              <>
                <TextField
                  fullWidth
                  label="Email đăng ký"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: "#C9A96E" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: "16px" },
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSendOtp}
                  disabled={loading}
                  sx={{
                    bgcolor: "#111",
                    color: "#fff",
                    py: 1.8,
                    borderRadius: "16px",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": { bgcolor: "#333" },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Gửi mã OTP"}
                </Button>
              </>
            ) : (
              <>
                <Box sx={{ textAlign: "center", mb: 1 }}>
                  <Typography variant="body2" color="textSecondary">
                    Mã OTP đã được gửi đến <strong>{email}</strong>
                  </Typography>
                  <Button 
                    size="small" 
                    onClick={() => setStep(1)} 
                    sx={{ textTransform: "none", color: "#C9A96E", mt: 0.5 }}
                  >
                    Thay đổi email
                  </Button>
                </Box>
                <TextField
                  fullWidth
                  label="Mã OTP"
                  placeholder="Nhập 6 chữ số"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKey sx={{ color: "#C9A96E" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: "16px" },
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleLogin}
                  disabled={loading}
                  sx={{
                    bgcolor: "#C9A96E",
                    color: "#fff",
                    py: 1.8,
                    borderRadius: "16px",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": { bgcolor: "#b38f4d" },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Xác nhận & Đăng nhập"}
                </Button>
              </>
            )}
          </Stack>

          <Typography variant="caption" color="textSecondary" sx={{ textAlign: "center" }}>
            Bằng cách đăng nhập, bạn đồng ý với Điều khoản & Chính sách của DailyZone.
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
};

export default SellerAuth;
