# Manual Test Scripts

This directory contains standalone test scripts and utilities for manual testing and debugging of the MAVLink implementation.

## Categories

### Test Scripts (`test_*.ts`, `test_*.js`, `test_*.py`)
Manual test scripts for verifying specific MAVLink functionality:
- SITL connection tests
- CRC validation tests
- Message serialization tests
- Protocol implementation tests

### Debug Scripts (`debug_*.ts`, `debug_*.js`, `debug_*.py`)
Debugging utilities for troubleshooting issues:
- CRC debugging
- Payload order verification
- XML parsing debugging

### Analysis Scripts (`analyze_*.js`, `analyze_*.py`)
Tools for analyzing MAVLink data:
- PCAP file analysis
- Telemetry log analysis
- GPS data analysis

### Generator Scripts (`generate_*.py`)
Utilities for generating test data or messages

## Usage

These scripts are meant to be run manually for testing and debugging purposes. They are not part of the automated test suite.

Example:
```bash
tsx tests/manual/test_all_streams.ts
python tests/manual/analyze_pcap.py
```

## Note

These scripts may require specific test environments (like SITL) or test data files to run properly.