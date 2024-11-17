import { Stack, Link } from "@mui/material";

export default function Header() {
  return (
      <Stack direction={"row"}>
        <Link href="/">Home</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/schedule">Schedule</Link>
      </Stack>
  );
}

