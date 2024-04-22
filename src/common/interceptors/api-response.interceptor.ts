import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';

@Injectable()
export class ApiResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse> {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();

        const statusCode = response.statusCode;

        let message = 'Error desconocido';

        if (statusCode === HttpStatus.NOT_FOUND) message = 'No se encontraron resultados';
        if (statusCode === HttpStatus.OK) message = 'Operación exitosa';
        if (statusCode === HttpStatus.CREATED) message = 'Objeto creado';

        return {
          statusCode,
          message,
          data,
        };
      }),
    );
  }
}
