import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({example: 'eterlate', description: 'account name'})
    readonly username: string

    @ApiProperty({example: 'passstr', description: 'authorization password'})
    readonly password: string

    @ApiProperty({example: 'Sasha', description: 'user name'})
    readonly name: string

    @ApiProperty({example: 'Mangus', description: 'user lastname'})
    readonly lastname: string

    @ApiProperty({example: 'eterlate@gmail.com', description: 'account mail adres'})
    readonly mail: string

    // @ApiProperty({example: 'img.png', description: 'account picture'})
    // readonly avatar: string

    // @ApiProperty({example: '[ObjectId, OjectId]', description: 'array of account roles'})
    // readonly roles: []
}