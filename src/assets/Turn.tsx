interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Turn = ({ size = 24, onClick, className = '' }: PropsType) => {
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
        d="M12 20C16.4183 20 20 16.4183 20 12C20 10.4715 19.5713 9.04314 18.8277 7.82854C18.7915 7.76952 18.7608 7.70803 18.7357 7.64492C18.4034 7.25202 18.4225 6.66331 18.7929 6.29289C19.1834 5.90237 19.8166 5.90237 20.2071 6.29289L23.2071 9.29289C23.5976 9.68342 23.5976 10.3166 23.2071 10.7071C22.86 11.0542 22.3212 11.0928 21.9314 10.8229C21.9767 11.2089 22 11.6018 22 12C22 17.5228 17.5228 22 12 22C9.99995 22 8.13705 21.4128 6.57425 20.4015C6.07133 20.076 6.03833 19.3751 6.46191 18.9515C6.82297 18.5904 7.39307 18.5611 7.82854 18.8277C9.04314 19.5713 10.4715 20 12 20Z"
        fill="currentColor"
      />
      <path
        d="M17.5371 5.04788C17.9607 4.62426 17.9276 3.92321 17.4246 3.59779C15.8621 2.58688 13.9996 2 12 2C6.47715 2 2 6.47715 2 12C2 12.3982 2.02328 12.7911 2.06855 13.1771C1.67882 12.9072 1.14001 12.9458 0.792893 13.2929C0.402369 13.6834 0.402369 14.3166 0.792893 14.7071L3.79289 17.7071C4.18342 18.0976 4.81658 18.0976 5.20711 17.7071C5.57768 17.3365 5.59661 16.7475 5.26391 16.3546C5.23871 16.2913 5.20797 16.2297 5.17176 16.1706C4.42845 14.9562 4 13.5281 4 12C4 7.58172 7.58172 4 12 4C13.5281 4 14.9562 4.42845 16.1706 5.17176C16.606 5.43831 17.1761 5.40891 17.5371 5.04788Z"
        fill="currentColor"
      />
    </svg>
  )
}
