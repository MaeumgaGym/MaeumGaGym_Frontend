interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
  isFill?: boolean
}

export const Play = ({ size = 24, onClick, className = '', isFill }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        d="M7 17.0936V6.90716C7 6.06719 7 5.64674 7.16008 5.39821C7.2998 5.1813 7.51516 5.03889 7.75424 5.00484C8.02808 4.96584 8.36394 5.16362 9.03469 5.55862L17.6836 10.6519L17.6867 10.6534C18.428 11.0899 18.7988 11.3083 18.9204 11.5993C19.0265 11.8532 19.0265 12.1463 18.9204 12.4002C18.7986 12.6916 18.4269 12.9109 17.6836 13.3486L9.03469 18.4419C8.36346 18.8371 8.02818 19.0342 7.75424 18.9951C7.51516 18.9611 7.2998 18.8187 7.16008 18.6018C7 18.3533 7 17.9336 7 17.0936Z"
        fill={isFill ? 'currentColor' : 'transparent'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
