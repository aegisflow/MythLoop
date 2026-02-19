/**
 * 📂 File Reader SKILL
 * 
 * Purpose: Read local files and return content to universe
 * Author: @Rain012
 * License: MIT
 * 
 * SECURITY:
 * - Only reads user-selected files
 * - Never sends data externally
 * - All access is logged
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION (Must match skill.json)
// ============================================================================

const CONFIG = {
  id: 'file-reader',
  version: '1.0.0',
  maxFileSizeBytes: 10 * 1024 * 1024, // 10MB
  allowedExtensions: [
    '.txt', '.md', '.json', '.yaml', '.yml',
    '.ts', '.js', '.py', '.html', '.css'
  ],
  forbiddenPaths: [
    '/System', '/Windows', '/.ssh', '/.gnupg',
    '/.aws', '/.config', '/.env', '/etc/passwd', '/etc/shadow'
  ]
};

// ============================================================================
// SECURITY VALIDATION
// ============================================================================

/**
 * Validate path is safe to read
 * @param {string} filePath - Path to validate
 * @returns {boolean} - True if safe
 * @throws {Error} - If path is forbidden
 */
function isPathSafe(filePath) {
  const resolvedPath = path.resolve(filePath);
  
  // Check forbidden paths
  for (const forbidden of CONFIG.forbiddenPaths) {
    if (resolvedPath.includes(forbidden)) {
      throw new Error(`Access denied: ${forbidden} is forbidden`);
    }
  }
  
  // Check extension
  const ext = path.extname(resolvedPath).toLowerCase();
  if (!CONFIG.allowedExtensions.includes(ext)) {
    throw new Error(`Access denied: ${ext} files are not allowed`);
  }
  
  // Check file size
  try {
    const stats = fs.statSync(resolvedPath);
    if (stats.size > CONFIG.maxFileSizeBytes) {
      throw new Error(
        `Access denied: File exceeds ${CONFIG.maxFileSizeBytes / 1024 / 1024}MB limit`
      );
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`Access denied: File not found: ${filePath}`);
    }
    throw err;
  }
  
  return true;
}

// ============================================================================
// CORE FUNCTIONS
// ============================================================================

/**
 * Read file and return content
 * @param {string} filePath - Path to file
 * @returns {Object} - File data with metadata
 */
export async function readFile(filePath) {
  // Validate path first
  isPathSafe(filePath);
  
  const resolvedPath = path.resolve(filePath);
  
  // Read content
  const content = fs.readFileSync(resolvedPath, 'utf-8');
  
  // Create log entry
  const logEntry = {
    skill: CONFIG.id,
    action: 'read_file',
    path: resolvedPath,
    size: content.length,
    timestamp: new Date().toISOString()
  };
  
  // Log action (for transparency)
  console.log('[File Reader SKILL]', JSON.stringify(logEntry));
  
  return {
    success: true,
    data: {
      path: resolvedPath,
      content: content,
      size: content.length,
      extension: path.extname(resolvedPath),
      timestamp: logEntry.timestamp
    },
    log: logEntry
  };
}

/**
 * Read multiple files (batch)
 * @param {string[]} filePaths - Array of file paths
 * @returns {Object[]} - Array of file data
 */
export async function readFiles(filePaths) {
  const results = [];
  const errors = [];
  
  for (const filePath of filePaths) {
    try {
      const result = await readFile(filePath);
      results.push(result);
    } catch (error) {
      errors.push({
        path: filePath,
        error: error.message
      });
    }
  }
  
  return {
    success: errors.length === 0,
    results: results,
    errors: errors,
    summary: {
      total: filePaths.length,
      succeeded: results.length,
      failed: errors.length
    }
  };
}

/**
 * Get file metadata without reading content
 * @param {string} filePath - Path to file
 * @returns {Object} - File metadata
 */
export async function getFileMetadata(filePath) {
  isPathSafe(filePath);
  
  const resolvedPath = path.resolve(filePath);
  const stats = fs.statSync(resolvedPath);
  
  return {
    success: true,
    data: {
      path: resolvedPath,
      size: stats.size,
      created: stats.birthtime.toISOString(),
      modified: stats.mtime.toISOString(),
      extension: path.extname(resolvedPath)
    }
  };
}

// ============================================================================
// MAIN ENTRY POINT
// ============================================================================

/**
 * Execute SKILL based on action type
 * @param {Object} params - Execution parameters
 * @returns {Object} - Execution result
 */
export async function execute(params) {
  const { action, filePath, filePaths } = params;
  
  try {
    switch (action) {
      case 'read_file':
        return await readFile(filePath);
      
      case 'read_files':
        return await readFiles(filePaths);
      
      case 'get_metadata':
        return await getFileMetadata(filePath);
      
      default:
        return {
          success: false,
          error: `Unknown action: ${action}`
        };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      skill: CONFIG.id,
      version: CONFIG.version
    };
  }
}

// ============================================================================
// SKILL INFO (For Gallery/Discovery)
// ============================================================================

/**
 * Get SKILL metadata
 * @returns {Object} - SKILL info
 */
export function getInfo() {
  return {
    id: CONFIG.id,
    version: CONFIG.version,
    name: 'File Reader',
    description: 'Read local files for contextual narratives',
    author: '@Rain012',
    license: 'MIT',
    permissions: ['read:files', 'write:logs'],
    security: {
      networkAccess: false,
      writeAccess: false,
      loggingEnabled: true
    }
  };
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  execute,
  getInfo,
  readFile,
  readFiles,
  getFileMetadata
};
