// UI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";

// Component
export default function Item() {
  return (
    <Card sx={{ pt: 1, borderRadius: 5 }} elevation={3}>
      <CardContent className="job-item">
        <Typography
          variant="body2"
          component="p"
          sx={{
            px: 1,
            py: 0.5,
            border: "1px solid",
            borderColor: grey[300],
            display: "inline-block",
            fontSize: "0.75rem",
            borderRadius: 3,
            color: grey[600],
            boxShadow: "var(--shadow-1)",
          }}
        >
          ⏳ Posted 2 days ago
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: 2,
            mt: 3,
          }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Company logo"
            className="company-logo"
          />
          <Box>
            <Typography
              variant="body2"
              component="h2"
              color={grey[500]}
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              Ema
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                letterSpacing: "1px",
                color: grey[700],
                fontWeight: 300,
              }}
            >
              Senior Frontend Developer
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                color: grey[700],
                fontSize: "0.75rem",
                mt: 0.5,
              }}
            >
              India
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: grey[600],
            mt: 1,
            fontWeight: 300,
            letterSpacing: "0.5px",
          }}
        >
          Estimated Salary: ₹18 - 35 LPA ✅
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: grey[800],
            mt: 2,
          }}
        >
          About Company:
        </Typography>
        <Typography variant="body2" component="p">
          Ema is a leading software development company in India.
        </Typography>

        <Typography
          variant="body2"
          component="p"
          sx={{
            color: grey[500],
            fontWeight: 500,
            mt: 2,
            letterSpacing: "1px",
          }}
        >
          Minimum Experience
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            mt: 0.25,
            fontWeight: 300,
          }}
        >
          2 years
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            py: 1,
            background: "var(--secondary)",
          }}
        >
          ⚡ Easy Apply
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            mt: 1,
            background: "var(--primary)",
            fontWeight: 200,
            fontSize: "0.9rem",
            py: 1,
          }}
        >
          <div className="referral-avatars">
            <Avatar
              alt="Remy Sharp"
              src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group.png"
              sx={{
                width: 24,
                height: 24,
              }}
            />
            <Avatar
              alt="Remy Sharp"
              src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group(1).png"
              sx={{
                width: 24,
                height: 24,
              }}
            />
          </div>
          Unlock referral asks
        </Button>
      </CardContent>
    </Card>
  );
}
