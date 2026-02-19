import { WorldState } from '../../shared/types';

/**
 * Export universe for sharing - 1 click, frictionless
 */
export const exportUniverse = async (state: WorldState, templateName: string): Promise<void> => {
  const data = JSON.stringify({ template: templateName, state, exportedAt: new Date().toISOString() }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const fileName = `${templateName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.mythloop`;
  
  // Try Web Share API first (mobile-friendly)
  if (navigator.share) {
    try {
      const file = new File([blob], fileName, { type: 'application/json' });
      await navigator.share({
        files: [file],
        title: `MythLoop: ${templateName}`,
        text: 'Check out my universe created with MythLoop!',
      });
      return;
    } catch {
      // Fallback to download
    }
  }
  
  // Fallback: download file
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Import universe from file
 */
export const importUniverse = async (file: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        resolve(data);
      } catch (err) {
        reject(new Error('Invalid universe file'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};
