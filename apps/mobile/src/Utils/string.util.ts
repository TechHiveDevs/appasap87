/**
 *  String Utils
 *
 */

// ===============================================

export function unCapitalize(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

// ===============================================

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ===============================================
