// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//HEAD , TAIL

  //head
  #!/bin/bash

num_lines=10
num_bytes=0
quiet=false
verbose=false
zero_terminated=false

while [[ "$1" =~ ^- ]]; do
    case "$1" in
    -n | --lines)
        num_lines="$2"
        shift 2
        ;;
    -c | --bytes)
        num_bytes="$2"
        shift 2
        ;;
    -q | --quiet )
        quiet=true
        shift
        ;;
    -v | --verbose)
        verbose=true
        shift
        ;;
    -z | --zero-terminated)
        zero_terminated=true
        shift
        ;;
    --)
        shift
        break
        ;;
    *)
        echo "Unknown option: $1" >&2
        exit 1
        ;;
    esac
done

print_content() {
    local file="$1"

    if [[ "$num_bytes" -gt 0 ]]; then
        dd if="$file" bs=1 count="$num_bytes" 2>/dev/null
    else
        awk -v lines="$num_lines" -v zero_term="$zero_terminated" '
        {
            if (zero_term) { printf "%s\0", $0 }
            else { print $0 }
            if (NR >= lines) exit
        }
        END { if (!zero_term) printf "\n" }' "$file"
    fi
}

if [[ $# -eq 0 ]]; then
    print_content "/dev/stdin"
else
    for file in "$@"; do
        if [[ ! -f "$file" ]]; then
            echo "head: cannot open '$file' for reading: No such file" >&2
            exit 1
        fi

        if [[ "$verbose" == true && "$quiet" == false ]]; then
            echo "==> $file <=="
        fi

        print_content "$file"
    done
fi




//tail
#!/bin/bash

LINES=10
BYTES=""
FOLLOW=false
QUIET=false
VERBOSE=false
SLEEP_INTERVAL=1

usage() {
    echo "Usage: tail [OPTION]... [FILE]..."
    echo "Print the last 10 lines of each FILE to standard output."
    echo "Options:"
    echo "  -c, --bytes=[+]NUM   output the last NUM bytes"
    echo "  -n, --lines=[+]NUM   output the last NUM lines (default: 10)"
    echo "  -f, --follow         output appended data as the file grows"
    echo "  -s, --sleep-interval NUM  with -f, sleep for NUM seconds between iterations"
    echo "  -q, --quiet          never output file name headers"
    echo "  -v, --verbose        always output file name headers"
    exit 1
}

while [[ "$1" =~ ^- ]]; do
    case "$1" in
    -c | --bytes)
        shift
        BYTES="$1"
        ;;
    -n | --lines)
        shift
        LINES="$1"
        ;;
    -s | --sleep-interval)
        shift
        SLEEP_INTERVAL="$1"
        ;;
    -q | --quiet)
        QUIET=true
        ;;
    -v | --verbose)
        VERBOSE=true
        ;;
    --help)
        usage
        ;;
    *)
        echo "Invalid option: $1" >&2
        usage
        ;;
    esac
    shift
done

if [ "$#" -eq 0 ]; then
    echo "tail: missing file operand"
    usage
fi

for FILE in "$@"; do
    if [ ! -f "$FILE" ]; then
        echo "tail: cannot open '$FILE' for reading: No such file" >&2
        continue
    fi

    if [ "$VERBOSE" = true ] || ([ "$QUIET" = false ] && [ "$#" -gt 1 ]); then
        echo "==> $FILE <=="
    fi

    if [ -n "$BYTES" ]; then
        tail -c "$BYTES" "$FILE"
    else
        tail -n "$LINES" "$FILE"
    fi

    echo
done
  `;
  res.json({ code: codeString });
});

module.exports = router;
