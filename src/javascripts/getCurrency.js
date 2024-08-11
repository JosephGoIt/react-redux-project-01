export function getCurrencyChar(currency) {
    switch (currency) {
      case 'php':
        return '₱';
      case 'usd':
        return '$';
      case 'eur':
        return '€';
      default:
        break;
    }
  }