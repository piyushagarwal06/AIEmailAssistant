import { Box, TextField } from "@mui/material";

const InputNames = ({ senderName, setSenderName, receiverName, setReceiverName }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
      <TextField
        label="Sender Name"
        value={senderName}
        onChange={(e) => setSenderName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Receiver Name"
        value={receiverName}
        onChange={(e) => setReceiverName(e.target.value)}
        fullWidth
      />
    </Box>
  );
};

export default InputNames;