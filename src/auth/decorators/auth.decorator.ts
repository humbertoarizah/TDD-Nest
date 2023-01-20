import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserPermissionGuard } from '../guards/user-permission.guard';

export const Auth = () => {
  return applyDecorators(UseGuards(AuthGuard(), UserPermissionGuard));
};
