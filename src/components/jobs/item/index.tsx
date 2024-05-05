// Imports
import { useState } from "react";

// UI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";

// Component
export default function Item({ job }: { job: any }) {
  // state
  const [showAbout, showAboutToggle] = useState(false);

  return (
    <Card
      sx={{
        pt: 1,
        borderRadius: 5,
        cursor: "pointer",
        ":hover": {
          transform: "scale(1.02)",
          transition: "all 0.3s ease",
        },
      }}
      elevation={3}
    >
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
          <img src={job.logoUrl} alt="Company logo" className="company-logo" />
          <Box>
            <Typography
              variant="body2"
              component="h2"
              color={grey[500]}
              sx={{
                fontSize: "1rem",
                lineHeight: "1rem",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              {job.companyName}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                letterSpacing: "1px",
                color: grey[700],
                fontWeight: 300,
                textTransform: "capitalize",
                mt: 0.5,
              }}
            >
              {job.jobRole}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                color: grey[700],
                fontSize: "0.75rem",
                mt: 0.5,
                textTransform: "capitalize",
              }}
            >
              {job.location}
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
          Estimated Salary:{" "}
          {job.minJdSalary
            ? `${job.salaryCurrencyCode} ${job.minJdSalary}k - ${job.maxJdSalary}k`
            : `${job.salaryCurrencyCode} ${job.maxJdSalary}k`}{" "}
          LPA ✅
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
          {/* {job.jobDetailsFromCompany} */}
          {showAbout
            ? job.jobDetailsFromCompany
            : job.jobDetailsFromCompany.slice(0, 200)}{" "}
          <Typography
            onClick={() => showAboutToggle(!showAbout)}
            variant="body2"
            component="span"
            sx={{
              color: "var(--primary)",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            {showAbout ? "Show Less" : "Show More"}
          </Typography>
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
          {job.minExp || job.maxExp
            ? `${job.minExp || job.maxExp} years`
            : "Not Specified"}
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
