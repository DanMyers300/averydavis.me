import type { VercelRequest, VercelResponse } from '@vercel/node';

exports.handler = function(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}